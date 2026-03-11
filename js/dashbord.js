let title = document.querySelector('#title');
let content = document.querySelector('#comment');
let saveDraft = document.querySelector('.save-btn');



saveDraft.addEventListener('click', function () {

    let draft = {
        title: title.value,
        content: content.value
    };

    localStorage.setItem('draft', JSON.stringify(draft));
    console.log('Draft saved:', draft);
});