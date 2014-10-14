<?php

?>
<script>

if('postMessage' in window) {
	window.top.postMessage("success", "*");
}else {
	window.parent.name = 'success';
}




</script>