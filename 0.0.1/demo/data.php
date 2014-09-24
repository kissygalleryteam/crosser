<?php
<<<<<<< HEAD
//$domain = $_POST['domain'];
?>
<script>
//document.domain = '<?= $domain ?>';
//window.parent.callback['success']();
=======

?>
<script>

>>>>>>> 458c71bf608b3cf49277199f1529e2ef1c64ca82
if('postMessage' in window) {
	window.top.postMessage("success", "*");
}else {
	window.parent.name = 'success';
}




</script>