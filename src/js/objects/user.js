const user = {
    avatarUrl:'',
    name: '',
    bio:'',
    userName:'',
    repositories:[],
    setInfo(gitHubuUser){
        this.avatarUrl = gitHubuUser.avatar_url
        this.name = gitHubuUser.name
        this.bio = gitHubuUser.bio
        this.userName = gitHubuUser.login
    },

    setRepositories(repositories){
        this.repositories = repositories
    }
}

export {user}