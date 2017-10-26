export interface Document {

  m_BiCnt: number[];
  m_BiGrams: string[];
  m_Companies: string[];
  m_Industry: string[];
  m_People: string[];
  m_Places: string[];
  m_SocialTags: string[];
  m_Technology: string[];
  m_Topics: string[];
  m_TriCnt: number[];
  m_TriGrams: string[];
  m_iDocBodyWordCnt: number;
  id: string; // maybe number
  m_szDocSumamry: string;
  m_szDocTitle: string;
  m_szGeo1: string; // main country
  m_szSourceType: string;
  m_szSrcUrl: string; // url
  m_szYear: number; // year

}
