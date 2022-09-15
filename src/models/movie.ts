export interface recommendItems {
  bannerProportion: number;
  blockGroupNum: null | string;
  coverType: null | string;
  homeSectionId: number;
  homeSectionName: string;
  homeSectionType: string;
  recommendContentVOList: any[];
  refId: null | string;
  refRedirectUrl: string;
}

export interface recommendContentVOList {
  category: number;
  contentType: string;
  dramaTypeVo: null | string;
  id: number;
  imageUrl: string;
  jumpAddress: string;
  jumpType: string;
  needLogin: boolean;
  releaseTime: null | string;
  resourceNum: null | string;
  resourceStatus: null | string;
  score: null | string;
  showMark: boolean;
  title: string;
}
