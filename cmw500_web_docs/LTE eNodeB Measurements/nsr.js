window.onload = Neuberechnen;
window.onresize = Neuberechnen;
window.onbeforeprint= set_to_print;
window.onafterprint= unset_print;

function set_to_print() {
	  var onsr = document.getElementById("nsr");
	  var omainbody = document.getElementById("mainbody");
	  
	  if (onsr != null) {
		  onsr.style.width = '100%';
	  }
	  if (omainbody != null) {
		  omainbody.style.width = '100%';
		  omainbody.style.top = 0;
		  omainbody.style.height = 0;
		  omainbody.style.overflow = 'visible';
	  }
}

function unset_print() {
	  var omainbody = document.getElementById("mainbody");
	  
	  if (omainbody != null) {
		  omainbody.style.overflow = 'auto';
		  Neuberechnen();
	  }
}

function Fensterbreite() {
  if (window.innerWidth) {
    return window.innerWidth;
  } else if (document.body && document.body.offsetWidth) {
    return document.body.offsetWidth;
  } else {
    return 0;
  }
}

function Fensterhoehe() {
  if (window.innerHeight) {
    return window.innerHeight;
  } else if (document.body && document.body.offsetHeight) {
    return document.body.offsetHeight;
  } else {
    return 0;
  }
}

function PositiveInt(i) {
	if (i > 0) {
		return i;
	}
	return 0;
}

function Neuberechnen() {
  var onsr = document.getElementById("nsr");
  var omainbody = document.getElementById("mainbody");
  
  if ((omainbody != null) && (onsr != null)) {
    onsr.style.width = PositiveInt(Fensterbreite() - 12) + 'px';
    omainbody.style.width = PositiveInt(Fensterbreite() - 24) + 'px';
    omainbody.style.top = onsr.offsetHeight + 'px';
    omainbody.style.height = PositiveInt(Fensterhoehe() - onsr.offsetHeight) + 'px';
  } else if (omainbody != null) {
	  omainbody.style.width = PositiveInt(Fensterbreite() - 24) + 'px';
	  omainbody.style.height = Fensterhoehe() + 'px';
  }
}
