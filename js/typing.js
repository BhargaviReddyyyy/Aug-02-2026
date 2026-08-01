const message = `Dear gurlsssss...... ❤️,

We'll always have each other's backs.

From silly jokes 😂

To unforgettable memories 📸

From random plans ✨

To endless laughter ❤️

Life may take us to different places...

Our paths may change...

But the memories we created together
will always stay in our hearts.

Here's to more laughter...
More trips😂😂...
More memories...
And a lifetime of friendship.

❤️ Happy Friendship Day ❤️

Favoritesssssss ✨`;

const typingElement = document.getElementById("typingText");

let index = 0;

window.typeLetter = function () {

    typingElement.innerHTML = "";
    index = 0;

    function typing(){

        if(index < message.length){

            typingElement.innerHTML += message.charAt(index);

            index++;

            setTimeout(typing,35);

        }

    }

    typing();

};