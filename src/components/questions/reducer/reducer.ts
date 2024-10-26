import { State } from "@/data";
import { actionType } from "@/data";

const reducer = (state: State, action: actionType) => {
  switch (action.type) {
    case "next-question": {
      const currentQuestion = state.questions[state.currentQuestion];
      const isCorrect = currentQuestion.variants.find(
        (variant) => variant.id === action.payload.id && variant.isCorrect,
      );
      return {
        ...state,
        currentQuestion: Math.min(
          state.currentQuestion + 1,
          state.questions.length - 1,
        ),
        selectedVariant: null,
        score: isCorrect ? state.score + currentQuestion.score : state.score,
        point: isCorrect ? state.point + 1 : state.point,
      };
    }
    case "select-answer":
      return {
        ...state,
        selectedVariant: action.payload.id,
      };
    case "finish-quiz":
      return {
        ...state,
        isFinished: true,
      };
  }
};
export default reducer;
