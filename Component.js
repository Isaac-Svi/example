class Component {
    constructor(entryPt) {
        this.entryPt = entryPt;
        this.makeReactive();
    }

    state = {
        shownComponent: 'home',
        users: [],
        loading: true,
    };

    makeReactive() {
        const localState = { ...this.state };
        const self = this;

        for (const key in this.state) {
            Object.defineProperty(this.state, key, {
                get() {
                    console.log(localState);
                    return localState[key];
                },
                set(newVal) {
                    localState[key] = newVal;
                    self.render();
                },
            });
        }
    }

    setState(newState) {
        for (const key in newState) {
            this.state[key] = newState[key];
        }
        this.render();
    }
    // setTimeout(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((res) => res.json())
    //         .then((users) => {
    //             state.users = users;
    //             state.loading = false;
    //             render();
    //         })
    //         .catch((err) => console.log(err));
    // }, 5000);

    render() {
        this.entryPt.innerHTML = `
            <div>
                shownComponent: ${this.state.shownComponent}
                <br />
                users: ${this.state.users.join('')}
                <br />
                loading: ${this.state.loading}
            </div>
        `;
    }
}
