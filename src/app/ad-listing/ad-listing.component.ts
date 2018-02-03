import { Component, OnInit } from '@angular/core';
import { AdService, AdListing } from '../ad.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-ad-listing',
  templateUrl: './ad-listing.component.html',
  styleUrls: ['./ad-listing.component.scss']
})
export class AdListingComponent implements OnInit {

  ad: any;
  adForm: FormGroup;

  constructor(private adService: AdService, private fb: FormBuilder) { }

  startNewAdListing() {
    this.ad = this.adService.createAd();
    this.buildForm();
  }

  saveAdChanges() {
    if (this.adForm.status !== 'VALID') {
      console.log('Form is not valid, cannot save to databse');
      return;
    }

    const data = this.adForm.value;
    this.adService.updateAd(this.ad, data);
  }

  private buildForm() {
    this.adForm = this.fb.group ({
      title: ['', Validators.required],
      content: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required]
    });
    this.ad.subscribe(ad => {
      this.adForm.patchValue(ad);
    });
  }

  ngOnInit() {
  }

}
