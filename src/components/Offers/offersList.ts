/* eslint-disable no-param-reassign */
import i18n from '../../i18n';

const offersList = [
  {
    id: 0,
    itemButton: i18n.t('offersList.0.itemButton'),
    itemButtonIcon: '/assets/offers/offer-1-icon.svg',
    title: i18n.t('offersList.0.title'),
    descriptionList: [
      i18n.t('offersList.0.descriptionList.0'),
      i18n.t('offersList.0.descriptionList.1'),
      i18n.t('offersList.0.descriptionList.2'),
    ],

    buttonLink: '#calculator',
    imgDesktopWebp: '/assets/offers/big/offer-1.webp',
    imgDesktopJpg: '/assets/offers/big/offer-1.jpg',
    imgTabletWebp: '/assets/offers/middle/offer-1.webp',
    imgTabletJpg: '/assets/offers/middle/offer-1.jpg',
    imgMobileWebp: '/assets/offers/small/offer-1.webp',
    imgMobileJpg: '/assets/offers/small/offer-1.jpg',
  },
  {
    id: 1,
    itemButton: i18n.t('offersList.1.itemButton'),
    itemButtonIcon: '/assets/offers/offer-2-icon.svg',
    title: i18n.t('offersList.1.title'),
    descriptionList: [
      i18n.t('offersList.1.descriptionList.0'),
      i18n.t('offersList.1.descriptionList.1'),
      i18n.t('offersList.1.descriptionList.2'),
    ],
    __html: i18n.t('offersList.1.html'),
    imgDesktopWebp: '/assets/offers/big/offer-2.webp',
    imgDesktopJpg: '/assets/offers/big/offer-2.jpg',
    imgTabletWebp: '/assets/offers/middle/offer-2.webp',
    imgTabletJpg: '/assets/offers/middle/offer-2.jpg',
    imgMobileWebp: '/assets/offers/small/offer-2.webp',
    imgMobileJpg: '/assets/offers/small/offer-2.jpg',
  },
  {
    id: 2,
    itemButton: i18n.t('offersList.2.itemButton'),
    itemButtonIcon: '/assets/offers/offer-3-icon.svg',
    title: i18n.t('offersList.2.title'),
    descriptionList: [
      i18n.t('offersList.2.descriptionList.0'),
      i18n.t('offersList.2.descriptionList.1'),
      i18n.t('offersList.2.descriptionList.2'),
    ],

    buttonLink: '#calculator',
    imgDesktopWebp: '/assets/offers/big/offer-3.webp',
    imgDesktopJpg: '/assets/offers/big/offer-3.jpg',
    imgTabletWebp: '/assets/offers/middle/offer-3.webp',
    imgTabletJpg: '/assets/offers/middle/offer-3.jpg',
    imgMobileWebp: '/assets/offers/small/offer-3.webp',
    imgMobileJpg: '/assets/offers/small/offer-3.jpg',
  },
  {
    id: 3,
    itemButton: i18n.t('offersList.3.itemButton'),
    itemButtonIcon: '/assets/offers/offer-4-icon.svg',
    title: i18n.t('offersList.3.itemButton'),
    descriptionList: [
      i18n.t('offersList.3.descriptionList.0'),
      i18n.t('offersList.3.descriptionList.1'),
    ],
    buttonLink: '#calculator',
    imgDesktopWebp: '/assets/offers/big/offer-4.webp',
    imgDesktopJpg: '/assets/offers/big/offer-4.jpg',
    imgTabletWebp: '/assets/offers/middle/offer-4.webp',
    imgTabletJpg: '/assets/offers/middle/offer-4.jpg',
    imgMobileWebp: '/assets/offers/small/offer-4.webp',
    imgMobileJpg: '/assets/offers/small/offer-4.jpg',
  },
];

i18n.on('languageChanged', () => {
  // eslint-disable-next-line array-callback-return
  offersList.map((item, index) => {
    item.itemButton = i18n.t(`offersList.${index}.itemButton`);
    item.title = i18n.t(`offersList.${index}.title`);
  });
  offersList[1].__html = i18n.t('offersList.1.html');
  offersList[0].descriptionList[0] = i18n.t('offersList.0.descriptionList.0');
  offersList[0].descriptionList[1] = i18n.t('offersList.0.descriptionList.1');
  offersList[0].descriptionList[2] = i18n.t('offersList.0.descriptionList.2');

  offersList[1].descriptionList[0] = i18n.t('offersList.1.descriptionList.0');
  offersList[1].descriptionList[1] = i18n.t('offersList.1.descriptionList.1');
  offersList[1].descriptionList[2] = i18n.t('offersList.1.descriptionList.2');

  offersList[1].descriptionList[0] = i18n.t('offersList.2.descriptionList.0');
  offersList[1].descriptionList[1] = i18n.t('offersList.2.descriptionList.1');
  offersList[1].descriptionList[2] = i18n.t('offersList.2.descriptionList.2');

  offersList[2].descriptionList[0] = i18n.t('offersList.3.descriptionList.0');
  offersList[2].descriptionList[1] = i18n.t('offersList.3.descriptionList.1');
});

export default offersList;
