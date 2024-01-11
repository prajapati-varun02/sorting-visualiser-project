import { COMPARE_COLOR, FINAL_COLOR, MakeDelay, SWAP_COLOR, MIN_COLOR, Swap, POSITION_FINAL_COLOR, disableAllButtons, delay, playNote } from "../Utilities/utils";

export async function insertionSort() {
	playNote(0);
	MakeDelay(200);
	disableAllButtons(true);
	var arr = document.querySelectorAll('.element-bar');
	document.getElementById("isort").classList.add('btndisabled');

	var n = arr.length

	for (var i = 0; i < n; i++) {
		for (var j = i; j >= 1; j--) {
			arr[i].style.background = MIN_COLOR;

			arr[j].style.background = COMPARE_COLOR;
			arr[j - 1].style.background = COMPARE_COLOR;
			playNote(200 + (arr[j - 1].clientHeight));
			await MakeDelay(delay);


			if (parseInt(arr[j].style.height) < parseInt(arr[j - 1].style.height)) {
				arr[j].style.background = SWAP_COLOR;
				arr[j - 1].style.background = SWAP_COLOR;
				playNote(200);
				Swap(arr[j - 1], arr[j]);
				await MakeDelay(delay);
			}
			else {
				arr[j].style.background = POSITION_FINAL_COLOR;
				arr[j - 1].style.background = POSITION_FINAL_COLOR;
				await MakeDelay(delay);
				break;
			}

			arr[j].style.background = POSITION_FINAL_COLOR;
			arr[j - 1].style.background = POSITION_FINAL_COLOR;
			await MakeDelay(delay);
		}
	}
	for (i = 0; i < n; i++) {
		arr[i].style.background = FINAL_COLOR;
		playNote(200 + (arr[i].clientHeight));
		await MakeDelay(delay);
	}
	document.getElementById("isort").className = 'btn';
	disableAllButtons(false);
}