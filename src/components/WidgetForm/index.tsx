import bugImageUrl from '../../assets/Bug.png';
import ideaImageUrl from '../../assets/Idea.png';
import thoughtImageUrl from '../../assets/Thought.png';
import { useState } from 'react';
import { FeedbackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccesStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
    BUG:{
        title: 'Problema',
        image:{
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA:{
        title: 'Ideia',
        image:{
            source: ideaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER:{
        title: 'Outro',
        image:{
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        },
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState <FeedbackType | null> (null)
    const [feedbackSend, setFeedbackSend] = useState(false)


    function handleRestartFeedback(){
        setFeedbackSend(false)
        setFeedbackType(null);
    }

    return(
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            

            { feedbackSend ? (
                <FeedbackSuccesStep onFeedbackRestartRequested={handleRestartFeedback}/>
            ):(
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
                    )  : (
                        <FeedbackContentStep 
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSend={() => setFeedbackSend(true)}
                        />
        
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito com amor pela <a href="https://rocketseat.com.br" className="underline underline-offset-2">Rocketseat</a>
            </footer>
        </div>
    )
}