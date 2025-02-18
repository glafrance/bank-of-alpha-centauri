import { CommonModule } from "@angular/common";
import { Component, input } from "@angular/core";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
  imports: [CommonModule]
})
export default class LogoComponent {
  gap = input<string>('.8rem');
  fontSize = input<string>('1.5rem');
  letterSpacing = input<string>('2px');
  imageDimension = input<string>('3rem');
  borderRadius = input<string>('1.5rem');

  containerStyles = () => ({
    gap: this.gap()
  });

  imageStyles = () => ({
    width: this.imageDimension(),
    height: this.imageDimension(),
    borderRadius: this.borderRadius()
  });

  textStyles = () => ({
    fontSize: this.fontSize(),
    letterSpacing: this.letterSpacing()
  });
}