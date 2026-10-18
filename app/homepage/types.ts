import type {
  HomeNotificationCmsConfig,
  ResourceButton,
} from "@/app/UIComponent/Carousel/HomePage/Notification";

export type AnnouncementItem = {
  text: string;
  href?: string;
  target?: string;
};

export type HomePageContent = {
  announcementsEnabled: boolean;
  announcementItems: AnnouncementItem[];
  notificationConfig: HomeNotificationCmsConfig | null;
  brochureButton?: ResourceButton;
};

export type HomeCarouselSlide = {
  imageUrl: string;
  altText?: string;
  clickUrl?: string;
  target?: "_blank" | "_self";
  width?: number;
  height?: number;
};
