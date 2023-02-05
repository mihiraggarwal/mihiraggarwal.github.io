import { publish } from 'gh-pages';

publish(
    "build",
    {
        branch: "gh-pages",
        repo: "https://github.com/mihiraggarwal/mihiraggarwal.github.io",
        user: {
            name: "mihiraggarwal",
            email: "mihir.aggarwal1000@gmail.com"
        },
        dotfiles: true
    }, () => {
        console.log("Deploy complete")
    }
);