"use client";

import { useEffect, useState } from "react";


const CACHE_KEY = "ipm_data";
const TTL = 5 * 60 * 1000; // 5 min

export function useIPMData() {
  const [uploads, setUploads] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      // 1️⃣ Read cache first
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        try {
          const { time, uploads } = JSON.parse(cached);
          if (Date.now() - time < TTL && Array.isArray(uploads)) {
            setUploads(uploads);
            setLoading(false);
          }
        } catch {
          localStorage.removeItem(CACHE_KEY);
        }
      }

      // 2️⃣ Always revalidate in background
      try {
       
        const res = await fetch(`/api/ipm`);
        const json = await res.json();
        const freshUploads = Array.isArray(json.uploads) ? json.uploads : [];

        if (!cancelled) {
          setUploads(prev =>
            JSON.stringify(prev) === JSON.stringify(freshUploads)
              ? prev
              : freshUploads
          );

          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({
              time: Date.now(),
              uploads: freshUploads
            })
          );

          setLoading(false);
        }
      } catch (e) {
        console.error("Repo fetch failed", e);
        setLoading(false);
      }
    }

    load();
    return () => { cancelled = true };
  }, []);

  return { uploads, loading };
}
