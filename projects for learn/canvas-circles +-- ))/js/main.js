

let canvas = {
    c: null,
    width: window.innerWidth,
    height: window.innerHeight,
    circles: [],
    circleNum: 1000,
    colorArr: [
        '#FFEE00',
        '#FFC200',
        '#FF9D00',
        '#FF7700',
        '#FF4800',
    ],
    init() {
        this.c = document.getElementById('mycanvas').getContext('2d')
        const can = document.getElementById('mycanvas')
        can.width = window.innerWidth
        can.height = window.innerHeight
    },

    createCircle() {
        for(let i = 0; i <= this.circleNum; i++){
        this.circles.push({
            y: this.height * Math.random(),
            x: this.width * Math.random(),
            radius: 50 * Math.random(),
            sx: 5 * Math.random(),
            sy: 5 * Math.random(),
            color: this.colorArr [Math.floor(Math.random() * this.colorArr.length + 1)]
        
      })
    }
},

update() {
    for (let circle of this.circles) {
        circle.x += circle.sx
        circle.y += circle.sy

        if(circle.x > this.width || circle.x < 10) {
            circle.sx *= -1
        }
        else if (circle.y > this.height || circle.y < 10)
            circle.sy *= -1
    }
},
    render() {
    this.c.clearRect (0, 0, this.width, this.height)
    for(let circle of this.circles) {
        this.c.beginPath()
        this.c.arc (circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        this.c.fillStyle = circle.color
        this.c.fill()
        } 
    },

run() {
    window.requestAnimationFrame(()=> {
        this.update()
        this.render()
        this.run()
    })
},

    start() {
        this.init()
        this.createCircle()
        this.run()
    }
}

window.addEventListener('load',()=> {
    canvas.start()
})