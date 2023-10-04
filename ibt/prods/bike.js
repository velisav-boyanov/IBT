function addItem(event) {
        event.preventDefault();
        var text = document.getElementById('review').value;
        var name = document.getElementById('name').value;
        var li = document.createElement('li');
        const str = name + ':' + text;
        var textNode = document.createTextNode(str);
        li.appendChild(textNode);
        var list = document.getElementById('reviews-list');
        list.appendChild(li);
        document.getElementById('inputText').value = '';
      }

function handleSubmit(event) {
        event.preventDefault();
        var name = document.getElementById('pname').value;
        const str = name + ' Thank you for your purchase.';
        alert(str);
      }      