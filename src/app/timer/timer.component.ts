import { Component, OnDestroy, OnInit } from '@angular/core';
import { timer, take, map, Subscription, interval } from 'rxjs';
import { FormatTimerPipe } from '../format-timer.pipe';
import { CountdownModule } from 'ngx-countdown';
@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [FormatTimerPipe, CountdownModule],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent implements OnInit, OnDestroy{
  ngOnInit(): void {
    
  }
  private timerSubscription!: Subscription;
  timeInSeconds: number = 300; // 5 minutes
  isStart: boolean = true;
  isPause: boolean = false;
  isResume: boolean = false;
  isReset : boolean = false;
  startTimer(): void {
    this.timerSubscription = interval(1000).subscribe(() => {
      if (this.timeInSeconds > 0) {
        this.timeInSeconds--;
      }
    });
    this.isStart = false;
    this.isPause = true;
    this.isResume = false;
    this.isReset = true;
  }
  pauseTimer(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.isStart = false;
      this.isPause = false;
      this.isResume = true;
      this.isReset = true;
    }
  }
  resumeTimer(): void {
    this.startTimer();
    this.isStart = false;
    this.isPause = true;
    this.isResume = false;
    this.isReset = true;
  }
  resetTimer(): void {
    this.timeInSeconds = 300;
    this.pauseTimer();
    this.isStart = true;
    this.isPause = false;
    this.isResume = false;
    this.isReset = false;
  }

  ngOnDestroy(): void {
    // this.pauseTimer();
    // this.timerSubscription.unsubscribe();
  }
}
