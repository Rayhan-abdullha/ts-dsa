interface MediaPlayer {
    play(): void
    pause(): void
    stop(): void
}

class AudioPlayer implements MediaPlayer {
    play(): void {
        console.log("Playing audio...")
    }
    pause(): void {
        console.log("Pausing audio...")
    }
    stop(): void {
        console.log("Stopping audio...")
    }
}

class VideoPlayer implements MediaPlayer {
    play(): void {
        console.log("Playing video...")
    }
    pause(): void {
        console.log("Pausing video...")
    }
    stop(): void {
        console.log("Stopping video...")
    }
}

const audioPlayer = new AudioPlayer()
const videoPlayer = new VideoPlayer()
audioPlayer.play()
audioPlayer.pause()
audioPlayer.stop()
videoPlayer.play()
videoPlayer.pause()
videoPlayer.stop()



abstract class Shape {
    abstract area(): number;
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }
    area(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }
    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

const shapes: Shape[] = [new Rectangle(10, 20), new Circle(5)];
shapes.forEach((shape) => console.log(shape.area()));