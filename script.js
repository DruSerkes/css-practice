let activeIdx = 0;

const cardGroups = document.getElementsByClassName("card-group");
const loveButton = document.querySelector('#love-button');
const hateButton = document.querySelector('#hate-button');

const handleClickLove = () => {
  let nextIdx = activeIdx + 1 > cardGroups.length - 1 ? 0 : activeIdx + 1;

  const currentGroup = document.querySelector(`[data-index="${activeIdx}"]`);
  const nextGroup = document.querySelector(`[data-index="${nextIdx}"]`);

  currentGroup.dataset.status = "after";
  nextGroup.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIdx = nextIdx;
  });
};

const handleClickHate = () => {
  let nextIdx = activeIdx - 1 < 0 ? 2 : activeIdx - 1;

  const currentGroup = document.querySelector(`[data-index="${activeIdx}"]`);
  const nextGroup = document.querySelector(`[data-index="${nextIdx}"]`);

  currentGroup.dataset.status = "before";
  nextGroup.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIdx = nextIdx;
  });
};

loveButton.addEventListener('click', handleClickLove);
hateButton.addEventListener('click', handleClickHate);