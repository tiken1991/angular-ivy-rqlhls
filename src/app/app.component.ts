import {
  animate,
  animation,
  keyframes,
  query,
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
          stagger(300, [
            style({ width: 0 }),
            animate(
              "1s",
              keyframes([
                style({ width: "0%" }),
                style({ width: "200%" }),
                style({ width: "*" })
              ])
            )
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
}
