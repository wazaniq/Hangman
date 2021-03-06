export default {
    getRandom: function(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    },
    allIndexOf: function(substring, str) {
        let result = [],
            i = -1;
        while ((i = str.indexOf(substring, i + 1)) >= 0) {
            result.push(i);
        }
        return result;
    },
    showCategory: function(categoryIndex) {
        if (categoryIndex === 0) {
            return "The Chosen Category is Animals";
        } else if (categoryIndex === 1) {
            return "The Chosen Category Is Films";
        } else {
            return "The Chosen Category Is Cities";
        }
    },
    cleanElements: function() {
        $('.guess-letter').remove();
        $('.letter').css('opacity', '1');
        $('#clue').html('');
        $('#desc').html('');
    },
    updateScores: function(currentUser) {
        $('#lives').html(`Lives: <strong>${currentUser.lives}</strong>`);
        $('#game-count').html(`Games: <strong>${currentUser.score}</strong>`);
        $('#guess-count').html(`Guesses: <strong>${currentUser.guesses}</strong>`);
        $('#whole-words').html(`Whole word: <strong>${currentUser.wholeWordGuess}</strong>`);
        $('#won').html(`Won: <strong>${currentUser.wonGames}</strong>`);
        $('#lost').html(`Lost: <strong>${currentUser.lostGames}</strong>`);
    }
}