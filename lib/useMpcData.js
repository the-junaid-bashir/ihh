"use client";

import { useEffect, useState } from "react";

const CACHE_KEY = "mpc_data"; 
const TTL = 5 * 60 * 1000;

export function useMpcData() {
  const [uploads, setUploads] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        try {
          const { time, data } = JSON.parse(cached);
          if (Date.now() - time < TTL && Array.isArray(data)) {
            setUploads(data);
            setLoading(false);
          }
        } catch {
          localStorage.removeItem(CACHE_KEY);
        }
      }

      try {
        const res = await fetch(`/api/mpc`);
        const json = await res.json();
        
        // IMPORTANT: Extract the array from the "uploads" key in your JSON
        const freshArray = Array.isArray(json.uploads) ? json.uploads : [];

        if (!cancelled) {
          setUploads(freshArray);
          localStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ time: Date.now(), data: freshArray })
          );
          setLoading(false);
        }
      } catch (e) {
        console.error("Fetch failed", e);
        setLoading(false);
      }
    }

    load();
    return () => { cancelled = true };
  }, []);

  return { uploads, loading };
}