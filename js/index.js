const $video = document.querySelector('#video')
        /*usa pesos para nombrar variables que apunten al html como convención, no es q sea necesario, pero así él las distingue de otras variables*/
        const $play = document.querySelector('#play')
        const $pause = document.querySelector('#pause')
        const $backward = document.querySelector('#backward')
        const $forward = document.querySelector('#forward')

        $play.addEventListener('click', handlePlay)
        $pause.addEventListener('click', handlePause)
        $backward.addEventListener('click', handleBackward)
        $forward.addEventListener('click', handleForward)


        function handlePlay() {
            $video.play()
            $play.hidden = true
            $pause.hidden = false
            console.log('le diste click al botón de play')

        }
        function handlePause() {
            $video.pause()
            $play.hidden = false
            $pause.hidden = true
            console.log('le diste click al botón de pausa')

        }
        function handleBackward() {
            //$video.currentTime =  $video.currentTime - 10
            //es equivalente a esto:
            $video.currentTime -= 10
            console.log('hacia atrás 10 segundos',  $video.currentTime)
        }
        function handleForward() {
            $video.currentTime =  $video.currentTime + 10
            console.log('hacia adelante 10 segundos',  $video.currentTime)
        }
        const $progress = document.querySelector('#progress')

        $video.addEventListener('loadedmetadata', handleLoaded)
        $video.addEventListener('timeupdate', handleTimeUpdate)

        function handleLoaded() {
            $progress.max = $video.duration
            console.log('ha cargado mi video', $video.duration)
        }
        function handleTimeUpdate() {
            $progress.value = $video.currentTime
            //console.log('tiempo actual', $video.currentTime)
        }
        $progress.addEventListener('input', handleInput)

        function handleInput(){
            $video.currentTime = $progress.value
            console.log($progress.value)
        }