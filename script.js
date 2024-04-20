const searchContainer = document.querySelector('.search-input-box');
const inputSearch = searchContainer.querySelector('#input');
const boxSuggestions = document.querySelector('.conteiner-suggestions');
const searchLink = document.querySelector('a');

inputSearch.onkeyup = e => {
    let userData = e.target.value;
    let emptyArray = [];

    if (userData){
        emptyArray = suggestions.filter(data => {
            return data
            .toLocaleLowerCase()
            .includes(userData.toLocaleLowerCase());

        });
        emptyArray = emptyArray.map(data => {
            return (data = `<li>${data}</li>`);
        })
        searchContainer.classList.add('active');
        showSuggestions(emptyArray);

        let allList = boxSuggestions.querySelectorAll('li');

        allList.forEach(li => {
            li.setAttribute('onclick', 'select(this)');
        });
    } else {
        searchContainer.classList.remove('active');
    }

};

function select(element) {
    
    let selectUserData = element.textContent;
    inputSearch.value = selectUserData;
    searchLink.href = `index.html``=${inputSearch.value}`;
    searchContainer.classList.remove('active');
}

const showSuggestions = list => {
	let listData;

	if (!list.length) {
		userValue = inputSearch.value;
		listData = `<li>${userValue}</li>`;
	} else {
		listData = list.join(' ');
	}
	boxSuggestions.innerHTML = listData;
};
 