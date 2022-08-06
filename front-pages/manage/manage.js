export default function handleInfluencersOnHover() {
  const influencersWrapper = document.querySelector('.influencers');
  const influencersList = document.querySelectorAll('.influencers--list-item');
  const influencersListArr = [...influencersList];

  const outputPhoto = document.querySelector('.influencer--photo');
  const outputInfo = document.querySelector('.influencer-hover-output');
  const outputInfluencerName = document.querySelector(
    '.influencer-hover-output--name'
  );

  influencersListArr.map((item) => {
    item.addEventListener('mouseover', () => {
      outputInfluencerName.innerHTML = item.dataset.name;
      outputInfo.innerHTML = item.dataset.info;
      outputPhoto.style.backgroundImage = `url(${item.dataset.bg})`;
    });

    // item.addEventListener('click', () => {
    //   influencersWrapper.style.backgroundImage = `url(${item.dataset.bg})`;
    // });
  });
}

handleInfluencersOnHover();
console.log('manage');
