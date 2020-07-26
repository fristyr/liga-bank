import i18n from '../../i18n';


const images = [
  {
    id: 1,
    description: i18n.t('sliderList.0.description'),
    buttonText: i18n.t('sliderList.0.buttonText'),
    buttonLink: '#calculator',
    imgDesktopWebp: '/assets/slider/big/2x/slide-1.desktop.2x.webp',
    imgDesktopJpg: '/assets/slider/big/2x/slide-1.desktop.2x.jpg',
    imgTabletWebp: '/assets/slider/middle/2x/slide-1.tablet.webp',
    imgTabletJpg: '/assets/slider/middle/2x/slide-1.tablet.jpg',
    imgMobileWebp: '/assets/slider/small/2x/slide-1.mobile.2x.webp',
    imgMobileJpg: '/assets/slider/small/2x/slide-1.mobile.2x.jpg',
  },
  {
    id: 2,
    description: i18n.t('sliderList.1.description'),
    imgDesktopWebp: '/assets/slider/big/2x/slide-2.desktop.2x.webp',
    imgDesktopJpg: '/assets/slider/big/2x/slide-2.desktop.2x.jpg',
    imgTabletWebp: '/assets/slider/middle/2x/slide-2.tablet.webp',
    imgTabletJpg: '/assets/slider/middle/2x/slide-2.tablet.jpg',
    imgMobileWebp: '/assets/slider/small/2x/slide-2.mobile.2x.webp',
    imgMobileJpg: '/assets/slider/small/2x/slide-2.mobile.2x.jpg',
  },
  {
    id: 3,
    description: i18n.t('sliderList.2.description'),
    buttonText: i18n.t('sliderList.2.buttonText'),
    buttonLink: '#bank-branches',
    imgDesktopWebp: '/assets/slider/big/2x/slide-3.desktop.2x.webp',
    imgDesktopJpg: '/assets/slider/big/2x/slide-3.desktop.2x.jpg',
    imgTabletWebp: '/assets/slider/middle/2x/slide-3.tablet.webp',
    imgTabletJpg: '/assets/slider/middle/2x/slide-3.tablet.webp',
    imgMobileWebp: '/assets/slider/small/2x/slide-3.mobile.2x.webp',
    imgMobileJpg: '/assets/slider/small/2x/slide-3.mobile.2x.jpg',
  },
];

i18n.on('languageChanged', () => {
  // eslint-disable-next-line array-callback-return
  images[0].description = i18n.t('sliderList.0.description')
  images[0].buttonText = i18n.t('sliderList.0.buttonText')

  images[1].description = i18n.t('sliderList.1.description')

  images[2].description = i18n.t('sliderList.2.description')
  images[2].buttonText = i18n.t('sliderList.2.buttonText')

});
export default images;
