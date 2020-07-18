const urlApi = 'https://api.github.com/search/repositories?per_page=10&sort=stars&order=desc&q=language:'

let repoview = []


function getLanguage(language){
    
    getRepositories(language).then(res => showRepo(res))

}

async function getRepositories(language){
    let getRepo = await fetch(`${urlApi}${language}`)

    let repoFounds = getRepo.json()

    return repoFounds
}

function showRepo(repos){
    let count = repos.items.length
    console.log(count)
     for(let i =0; i<count;i++){
       console.log(repos.items[i])

        let id = repos.items[i].id
        let name = repos.items[i].name
        let description = repos.items[i].description
        let fullName = repos.items[i].full_name 
        let stars = repos.items[i].stargazers_count
        let img = repos.items[i].owner.avatar_url
        let owner = repos.items[i].owner.login

        let newRepo = new repoinf(`${id}`, `${name}`, `${description}`, `${fullName}`, `${stars}`, `${img}`, `${owner}`)

        repoview.push(newRepo)

     }
    //  for(let repo in repos.items)
      console.log(repoview)

 }

 function repoinf(id, name, description, fullName, stars, img, owner){
    this.id = id
     this.name = name
     this.description = description
     this.fullName = fullName
     this.stars = stars
     this.img = img
     this.owner = owner
    }

const _repoview = repoview
export { _repoview as repoview }
