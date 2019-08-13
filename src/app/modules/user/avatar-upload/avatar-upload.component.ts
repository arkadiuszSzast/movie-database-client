import { Component, OnInit } from '@angular/core';
import { AvatarUploadService } from './avatar-upload.service';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-avatar-upload',
  templateUrl: './avatar-upload.component.html',
  styleUrls: ['./avatar-upload.component.scss']
})
export class AvatarUploadComponent implements OnInit {

  avatar: File;

  constructor(private avatarUploadService: AvatarUploadService, private authService: AuthService) { }

  ngOnInit() {
  }
  
  handleFileInput(file: File) {
    this.avatar = file;
  }

  upload() {
    this.avatarUploadService.uploadAvatar(this.avatar).pipe(first()).subscribe(() => this.authService.getNewTokenAndSave());
  }

}
