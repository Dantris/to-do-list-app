function newItem() {
  // 1. Adding a new item to the list of items:
  let inputValue = $('#input').val();

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    // Declare li in this scope to make it accessible
    let li = $('<li></li>').text(inputValue);
    $('#list').append(li);
    $('#input').val(''); // Clear the input field

    // 2. Crossing out an item from the list of items:
    li.on('dblclick', function () {
      $(this).toggleClass('strike');
    });

    // 3(i). Adding the delete button "X":
    let crossOutButton = $('<button>X</button>');
    crossOutButton.appendTo(li);

    // 3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
    crossOutButton.on('click', function () {
      $(this).closest('li').addClass('delete');
    });

    // 4. Reordering the items:
    $('#list').sortable();
  }
}

// Call the newItem function when the button is clicked
$('#button').on('click', newItem);
