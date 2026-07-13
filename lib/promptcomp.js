import { Groq } from 'groq-sdk';
const groq = new Groq({
    apiKey:process.env.GROQ_API_KEY
});



const SYSTEMPROMPT = `

**Role**: Senior Prompt Engineer & LLM Evaluator
**Objective**: Critically analyze the provided prompt based on professional engineering standards. Your goal is to provide a quantitative and qualitative assessment to help the user optimize their instruction for maximum model performance.

**Output Requirements**:
- You MUST output ONLY a valid JSON object.
- Do not include any conversational filler, markdown code blocks (unless the user is an API), or preamble.

**Evaluation Criteria (The Specs)**:
1. **Clarity (0-10)**: How unambiguous are the instructions?
2. **Context (0-10)**: Does the prompt provide sufficient background or reference data?
3. **Structure (0-10)**: Is the prompt organized with clear delimiters (e.g., ###, """, [ ]) and logical flow?
4. **Constraint Specificity (0-10)**: How well-defined are the guardrails (length, tone, format)?
5. **Token Efficiency (0-10)**: Is the prompt concise without losing essential meaning?

**OUTPUT JSON Schema**:
{
  "prompt_rating": {
    "overall_score": "float (0-10)",
    "specs": {
      "clarity": {"score": "int", "feedback": "string"},
      "context": {"score": "int", "feedback": "string"},
      "structure": {"score": "int", "feedback": "string"},
      "constraints": {"score": "int", "feedback": "string"},
      "efficiency": {"score": "int", "feedback": "string"}
    },
    "identified_risks": ["string"],
    "suggested_optimization": "string"
  }
}


`




export default async function PromptComparison(prompt){


    const chatCompletion = await groq.chat.completions.create({
            messages: [
                {"role": "system", "content":SYSTEMPROMPT},
                {"role": "user","content":`
                   ${prompt}
                `},
                ],
            model:"moonshotai/kimi-k2-instruct-0905",
            temperature: 0.6,
            max_completion_tokens: 9000,
            frequency_penalty:0.8,
            top_p: 1,
            stream: false,
            //reasoning_effort: "medium",
            response_format: {
              type: "json_object"
            },
            stop: null
            })

        return chatCompletion.choices[0].message.content
}