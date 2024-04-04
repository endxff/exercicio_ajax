$(document).ready(function() {
    const endpoint = `https://api.github.com/users/endxff`;
    const avatar = $('#avatar');
    const profileName = $('#profile-name');
    const profileUser = $('#profile-username');
    const repositories = $('#repos');
    const followers = $('#followers');
    const follows = $('#follows');
    const gitLink = $('#profile-link');

    fetch(endpoint)
    .then(function(res) {
        return res.json()
    })
    .then(function(json) {
        profileName.text(json.name);
        avatar.attr("src", json.avatar_url);
        profileUser.text(`@${json.login}`);
        repositories.text(json.public_repos);
        followers.text(json.followers);
        follows.text(json.following);
        gitLink.attr("href", json.html_url);
    })
})