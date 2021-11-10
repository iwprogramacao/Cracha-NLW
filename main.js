const linksSocialMedia = {
  github: 'iwprogramacao',
  instagram: 'iw.programacao',
  youtube: 'watch?v=dQw4w9WgXcQ',
  linkedin: 'in/igor-wiepieski-066098223',
  facebook: 'zuck'
}

function changeSocialMediaLinks() {
  document.getElementById('userName').textContent = 'Igor Wiepieski'
  userName.textContent = 'Igor Wiepieski'
  /* Os dois itens significam a mesma coisa (foco no textContent) */
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGit.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
