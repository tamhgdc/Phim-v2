export interface Details {
  aliasName: string;
  areaList: any[];
  areaNameList: string[];
  category: number;
  collect: boolean;
  contentTagResourceList: string[];
  coverHorizontalUrl: string;
  coverHorizontalUrlJson: string;
  coverVerticalUrl: string;
  drameTypeVo: { drameName: string; drameType: string };
  episodeCount: 16;
  episodeRoomListVo: any;
  episodeVo: episodeVo[];
  id: number;
  introduction: string;
  likeList: any[];
  name: string;
  nameJson: string;
  refList: RefList[];
  reserved: boolean;
  score: number;
  seriesNo: null | string;
  showSetName: boolean;
  starList: any[];
  tagList: any[];
  tagNameList: string[];
  translateType: number;
  upInfo: { upId: number; upImgUrl: string; upName: string };
  updateInfo: { updatePeriod: string; updateStatus: number };
  year: number;
}

export interface episodeVo {
  definitionList: definitionList[];
  id: number;
  name: string;
  nameJson: string;
  resourceType: number;
  seriesNo: number;
  subtitlingList: subtitlingList[];
  totalTime: number;
  vid: string;
}

export interface definitionList {
  code: string;
  description: string;
  fullDescription: string;
}

export interface subtitlingList {
  language: string;
  languageAbbr: string;
  subtitlingUrl: string;
  translateType: number;
}

export interface mediaLink {
  businessType: number;
  currentDefinition: string;
  episodeId: number;
  mediaUrl: string;
  totalDuration: number;
}

export interface RefList {
  category: number;
  coverHorizontalUrl: string;
  coverVerticalUrl: string;
  drameTypeVo: { drameName: string; drameType: string };
  id: string;
  name: string;
  seriesNo: string;
}

export interface ResultMedia extends mediaLink {
  quanlity: string;
  id: number;
}

export interface TagList {
  id: number;
  name: string;
}
