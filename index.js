// Your code here
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
	const leftNumbers = dodger.style.left.replace('px', '');
	const left = parseInt(leftNumbers, 10);
	if (left > 0) {
		dodger.style.left = `${left-1}px`;
	}
}

function moveDodgerRight() {
	const leftNumbers = dodger.style.left.replace('px', '');
	let left = parseInt(leftNumbers, 10);
	if (left + 40 < 400) {
		dodger.style.left = `${left+1}px`;
	}
}

document.body.addEventListener('keydown', function(e) {
	if (e.key === 'ArrowLeft') {
		moveDodgerLeft();
	} else if (e.key === 'ArrowRight') {
		moveDodgerRight();
	}
});

// it('moves the DODGER to the left', () => {
//     let left = dodger.style.left
//     left = parseInt(left)

//     moveDodgerLeft()

//     let newPosition = dodger.style.left
//     newPosition = parseInt(newPosition)

//     if (left > 0){
//       expect(newPosition).to.be.below(left)
//     } else {
//       expect(newPosition).to.equal(left)
//     }
//   })
// })