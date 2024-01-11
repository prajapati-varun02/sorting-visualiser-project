import { delay, FINAL_COLOR, MakeDelay, POSITION_FINAL_COLOR, PRIMARY_COLOR, COMPARE_COLOR, SWAP_COLOR, Swap, disableAllButtons, playNote } from "../Utilities/utils";


export async function bubbleSort() {
	playNote(0);
	MakeDelay(200);
	disableAllButtons(true);
	var arr = document.querySelectorAll('.element-bar');
	document.getElementById("bsort").classList.add('btndisabled');
	var n = arr.length;

	for (var i = 0; i < n; i++) {
		for (let j = 0; j < n - i - 1; j++) {

			arr[j].style.background = COMPARE_COLOR;
			arr[j + 1].style.background = COMPARE_COLOR;
			playNote(200 + (arr[j].clientHeight));
			await MakeDelay(delay);

			if (parseInt(arr[j].style.height) > parseInt(arr[j + 1].style.height)) {
				arr[j].style.background = SWAP_COLOR;
				arr[j + 1].style.background = SWAP_COLOR;
				playNote(200);
				await MakeDelay(delay);
				Swap(arr[j], arr[j + 1]);
			}
			await MakeDelay(delay);
			arr[j].style.background = PRIMARY_COLOR;
			arr[j + 1].style.background = PRIMARY_COLOR;
		}
		await MakeDelay(delay);
		arr[n - 1 - i].style.background = POSITION_FINAL_COLOR;
	}

	for (i = 0; i < n; i++) {
		await MakeDelay(delay);
		playNote(200 + (arr[i].clientHeight));
		arr[i].style.background = FINAL_COLOR;
	}
	document.getElementById("bsort").className = 'btn';
	disableAllButtons(false);
}