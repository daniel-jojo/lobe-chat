/**
 * LLM 模型
 */
export enum LanguageModel {
  /**
   * GPT 3.5 Turbo
   */
  GPT3_5 = 'gpt-3.5-turbo',
  GPT3_5_1106 = 'gpt-3.5-turbo-1106',
  GPT3_5_16K = 'gpt-3.5-turbo-16k',
  /**
   * GPT 4
   */
  GPT4 = 'gpt-4',
  GPT4_32K = 'gpt-4-32k',
  GPT4_PREVIEW = 'gpt-4-0125-preview',
  GPT4_VISION_PREVIEW = 'gpt-4-vision-preview',
  google_gemini_pro_vision = 'google/gemini-pro-vision',
  gryphe_mythomax_l2_13b = 'gryphe/mythomax-l2-13b',
  mistralai_mistral_medium = 'mistralai/mistral-medium',
  /**
   * Custom Models (OpenRouter)
   */
  openai_gpt_3_5_turbo_1106 = 'openai/gpt-3.5-turbo-1106',
  openai_gpt_4_1106_preview = 'openai/gpt-4-1106-preview',
  openai_gpt_4_vision_preview = 'openai/gpt-4-vision-preview',
}

// 语言模型的设置参数
export interface LLMParams {
  /**
   * 控制生成文本中的惩罚系数，用于减少重复性
   * @default 0
   */
  frequency_penalty?: number;
  /**
   * 生成文本的最大长度
   */
  max_tokens?: number;
  /**
   * 控制生成文本中的惩罚系数，用于减少主题的变化
   * @default 0
   */
  presence_penalty?: number;
  /**
   * 生成文本的随机度量，用于控制文本的创造性和多样性
   * @default 0.6
   */
  temperature?: number;
  /**
   * 控制生成文本中最高概率的单个 token
   * @default 1
   */
  top_p?: number;
}

export type LLMRoleType = 'user' | 'system' | 'assistant' | 'function';

export interface LLMMessage {
  content: string;
  role: LLMRoleType;
}

export type FewShots = LLMMessage[];
