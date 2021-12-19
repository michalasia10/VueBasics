function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logs: [],
        }
    },
    computed: {
        monsterBarStyle() {
            if (this.monsterHealth < 0) {
                return {width: '0%'};
            }
            return {width: this.monsterHealth + '%'}
        },
        playerBarStyle() {
            if (this.playerHealth < 0) {
                return {width: '0%'};
            }
            return {width: this.playerHealth + '%'}
        },
        disableSpecialAttack() {
            return this.currentRound % 3 !== 0
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        },
    },
    methods: {
        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logs = [];
            this.addLogs('player','start new game','new game')
        },
        surrender() {
            this.winner = 'monster';
            this.addLogs('player','surrender','monster won')
        },
        attackMonster() {
            this.currentRound++
            let attackDamage = getRandom(12, 5)
            this.monsterHealth -= attackDamage;
            this.attackPlayer();
            this.addLogs('player','attack',attackDamage)
        },
        attackPlayer() {
            let attackDamage = getRandom(20, 8)
            this.playerHealth -= attackDamage;
            this.addLogs('monster','attack',attackDamage)
        },
        useSpecialAttack() {
            this.currentRound++
            let attackDamage = getRandom(10, 25)
            this.monsterHealth -= attackDamage;
            this.attackPlayer();
            this.addLogs('player','special attack',attackDamage)
        },
        healPlayer() {
            const healValue = getRandom(8, 20)
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100
            } else {
                this.playerHealth += healValue;
            }
            this.addLogs('player','heal',healValue)
            this.attackPlayer();
        },
        addLogs(who, what, value) {
            this.logs.unshift({
                    actionBy: who,
                    actionType: what,
                    actionValue: value
                }
            )
        }
    }
})

app.mount('#game')