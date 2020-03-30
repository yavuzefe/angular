//Bizim root modülümüzdür.Uygulamamızın giriş noktasıdır. 
//Uygulamanın compile (derlenmesi) veya başlangıç modülüne dair bilgiler verir.
//Burası bizim uygulama boyunca kullanacağımız farklı modülleri entegre ettiğimiz,
//bu component ile ilgili importları yapabildiğimiz yada başka modüllerdeki nesnelere ulaşabildiğimiz yerdir. 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  //Bir modülün modül olabilmesi için @NgModule’den deklare ediliyor (özellik alıyor) olması gerekir. 
  //NgModule aslında @NgModule şeklinde ifade edilen bir sınıftır. 
  //NgModül’ü tek bir objesi olan ve içeriğindeki elemanlar ile 
  //modülü tanımlayan bir constructor olarak düşünebilirsiniz.
  declarations: [
//uygulama boyunca bu modüle dahil etmek istediğimiz component’leri çağırdığımız yerdir. 
//view alanlarının tanımlandığı yer olarak düşünebilirsiniz.
    AppComponent,
    MenuComponent
  ],
  imports: [
    // Burası bizim uygulama boyunca kullanacağımız farklı modülleri entegre ettiğimiz, 
    //bu component ile ilgili importları yapabildiğimiz yada başka modüllerdeki 
    //nesnelere ulaşabildiğimiz yerdir.
    //Bu alana yazdığınız ve import ettiğiniz modüllerin artık nesnelerine erişerek kullanabilirsiniz.
    BrowserModule,
    AppRoutingModule
  ],
  // (burada yok)
  //exports: app component’iniz import edildiğinde 
//bizim hangi componentlerimize erişebileceğinizi gösterir
  providers: [], //Servis sağlayıcıları.
  //Bizim uygulama boyunca kullanacağımız bir servis varsa yani global olacaksa burada tanimlariz
  bootstrap: [AppComponent] //Bu modülün başlangıç component’inin ne olduğunu belirttiğiniz noktadır. 
  //Bootstrap özelliği sadece root component’ine atanır.
})
export class AppModule { } //başkaları referans edebilmesi için export yazarız

