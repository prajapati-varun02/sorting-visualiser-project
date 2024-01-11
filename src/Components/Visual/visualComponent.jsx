import React, { useState, useEffect } from 'react';
import { bubbleSort } from '../Algorithms/bubbleSort';
import { selectionSort } from '../Algorithms/selectionSort';
import { insertionSort } from '../Algorithms/insertionSort';
import { quickSort } from '../Algorithms/quickSort';
import { mergeSort } from '../Algorithms/mergeSort';
import { heapSort } from '../Algorithms/heapSort';
import { changeDelay, delay, PRIMARY_COLOR, sound, toggleSound, playNote } from '../Utilities/utils';
import './visualComponent.css'
import icon from '../Assets/github-icon.png'

function VisualComponent() {

	var [SoundText, setSoundText] = useState('Mute');
	var [arr, setArr] = useState([]);
	var [arrSize, setArrSize] = useState(30);
	var [wid, setWid] = useState(33);
	var [delayinit, changeDelayinit] = useState(200);

	const changeDelayinitHelper = (val) => {
		changeDelay(505 - val);
		changeDelayinit(val);
	};

	function resetArr() {
		var arr = []
		for (var i = 0; i < arrSize; i++) {
			let x = Math.random();
			arr.push(x > 0.05 ? x : 0.05);
		}
		setArr(arr);
		var elem = document.querySelectorAll('.element-bar');
		for (i = 0; i < elem.length; i++) {
			elem[i].style.background = PRIMARY_COLOR
		}
	}

	function handleSound() {
		toggleSound();
		if (sound === true) setSoundText(`Mute`);
		else setSoundText(`Unmute`);
	}

	useEffect(() => {
		playNote(0);
		resetArr();
	}, [])

	function setArrSizeHelper(val) {
		if (val > 100) {
			setWid(2)
		}
		else if (val > 80) {
			setWid(5);
		}
		else if (val > 70) {
			setWid(7);
		}
		else if (val > 60) {
			setWid(10);
		}
		else if (val > 50) {
			setWid(15);
		}
		else if (val > 40) {
			setWid(19);
		}
		else if (val > 30) {
			setWid(25);
		}
		else if (val > 20) {
			setWid(33);
		}
		else if (val > 10) {
			setWid(40);
		}
		else {
			setWid(60);
		}

		setArrSize(val);
		resetArr();
	}


	return (

		<div>
			<div>
				<div className='wrapper relative'>
					<div className='sideNavbar'>
						<div className='logo w-[45px]'>
							<br />
							<a href="https://github.com/Yash-Sharma2" target='_blank' rel='noreferrer' >
								<img src={icon} alt='myGithub' />
							</a>
						</div>
						<h3 >Sorting Visualiser</h3>
						<div className='pt-5 sliders'>
							<label className='sliderLabel'>
								Array Size
								<br />
								<input id='rangeSlider' type='range' min='5' max='150' value={arrSize} onChange={(e) => setArrSizeHelper(e.target.value)} />
							</label>
							<br />
							<label className='sliderLabel'>
								Speed
								<br />
								<input type='range' min='5' max='500' value={delayinit} onChange={(e) => { changeDelayinitHelper(e.target.value) }} />
							</label>
						</div>
						<br />
						<div className='btn-group'>
							<div><button className='btn-sound' onClick={handleSound}>{SoundText}</button></div>
							<div><button className='btn' onClick={resetArr}>Generate array</button></div>
							<div><button className='btn' id='msort' onClick={mergeSort}>MergeSort Sort</button></div>
							<div><button className='btn' id='qsort' onClick={quickSort}>Quick<br />Sort</button></div>
							<div><button className='btn' id='hsort' onClick={heapSort}>Heap<br />Sort</button></div>
							<div><button className='btn' id='bsort' onClick={bubbleSort}>Bubble Sort</button></div>
							<div><button className='btn' id='ssort' onClick={selectionSort}>Selection Sort</button></div>
							<div><button className='btn' id='isort' onClick={insertionSort}>Insertion Sort</button></div>
						</div>
					</div>
					<div className='array'>
						{arr.map((val, idx) => (
							<div
								className='element-bar'
								key={idx}
								style={{
									height: `${Math.floor(val * 95)}%`,
									width: `${wid}px`,
									backgroundColor: PRIMARY_COLOR,
									transition: '100ms'
								}} >
							</div>
						))}
					</div>

				</div>
			</div>
		</div>


	)
};

export default VisualComponent;