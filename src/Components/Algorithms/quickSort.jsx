import { FINAL_COLOR, MakeDelay, POSITION_FINAL_COLOR, PRIMARY_COLOR, COMPARE_COLOR, SWAP_COLOR, Swap, MIN_COLOR, disableAllButtons, delay, playNote, randomNumberFrom } from "../Utilities/utils";

async function partition(ele, s, e) {
	var n = randomNumberFrom(s, e);
	ele[n].style.background = SWAP_COLOR;
	ele[e].style.background = SWAP_COLOR;
	playNote(500);
	Swap(ele[e], ele[n]);
	await MakeDelay(delay);
	ele[n].style.background = PRIMARY_COLOR;
	ele[e].style.background = PRIMARY_COLOR;


	ele[e].style.background = MIN_COLOR;   // current pivot color 
	playNote(200 + (ele[e].clientHeight));
	await MakeDelay(delay);
	var m = s;
	var pivot = e;

	for (var i = s; i < e; i++) {
		ele[i].style.background = COMPARE_COLOR;
		playNote(200 + (ele[e].clientHeight));
		await MakeDelay(delay);

		if (parseInt(ele[i].style.height) < parseInt(ele[pivot].style.height)) {

			ele[m].style.background = COMPARE_COLOR;
			await MakeDelay(delay);

			if (i !== m) {
				ele[i].style.background = SWAP_COLOR;
				ele[m].style.background = SWAP_COLOR;
				playNote(500);
				Swap(ele[i], ele[m]);
				await MakeDelay(delay);
				ele[m].style.background = PRIMARY_COLOR;
			}

			if (m !== s) {
				ele[m - 1].style.background = PRIMARY_COLOR
			}

			m += 1;
		}
		ele[i].style.background = PRIMARY_COLOR;
		ele[m].style.background = PRIMARY_COLOR;
		await MakeDelay(delay);
	}

	ele[e].style.background = PRIMARY_COLOR;
	ele[m].style.background = SWAP_COLOR;
	ele[pivot].style.background = SWAP_COLOR;
	Swap(ele[m], ele[pivot]);
	playNote(500);
	await MakeDelay(delay);
	ele[m].style.background = PRIMARY_COLOR;
	ele[pivot].style.background = PRIMARY_COLOR;

	ele[m].style.background = POSITION_FINAL_COLOR;
	playNote(200 + (ele[m].clientHeight));
	await MakeDelay(delay);
	return m;
}

async function quickSortHelper(ele, s, e) {
	if (s >= e) {
		if (s === e) {
			ele[s].style.background = POSITION_FINAL_COLOR;
			playNote(200 + (ele[s].clientHeight));
			MakeDelay(delay);
		}
		return;
	}
	var p = await partition(ele, s, e);
	await quickSortHelper(ele, s, p - 1);
	await quickSortHelper(ele, p + 1, e);
	return;
}
export async function quickSort() {
	playNote(0);
	MakeDelay(200);
	disableAllButtons(true);
	document.getElementById("qsort").classList.add('btndisabled');

	var arr = document.querySelectorAll('.element-bar');
	var n = arr.length;
	await quickSortHelper(arr, 0, n - 1);
	for (var i = 0; i < n; i++) {
		arr[i].style.background = FINAL_COLOR;
		playNote(200 + (arr[i].clientHeight));
		await MakeDelay(delay)
	}
	document.getElementById("qsort").className = 'btn';
	disableAllButtons(false);
}