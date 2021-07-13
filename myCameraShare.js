async function getVideo () {
	let videoOption = {
		video: true,
		audio:false
	}

	const displayOption = {
        video: true,
		audio:false

	}
	let video = await navigator.mediaDevices.getUserMedia(videoOption)
	// let video = await navigator.mediaDevices.getDisplayMedia(displayOption)
	
	videoElement.srcObject = video
}
getVideo()