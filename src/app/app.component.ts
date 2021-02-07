import {
  animate,
  animation,
  keyframes,
  query,
sequence,
  stagger,
  style,
  transition,
  trigger
} from "@angular/animations";
import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("rect", [
      transition(":enter", [
        query("rect, :enter", [
          sequence([stagger(300, [
            style({ width: 0, height: 0, x: 0 }),
            animate(
              "0.5s ease-in-out",
              keyframes([
                style({ width: "0%", height: 0 , x: '10%'}),
                style({ width: "200%", height: '*' }),
                style({ width: "*", height: '*' })
              ])
            )
          ])])
        ])
      ])
    ])
  ]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
}
