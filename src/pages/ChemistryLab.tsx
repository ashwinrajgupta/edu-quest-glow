import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Beaker, Eye, CheckCircle, XCircle, RotateCcw } from "lucide-react";

interface Chemical {
  id: string;
  name: string;
  color: string;
  formula: string;
  description: string;
}

interface Reaction {
  chemicals: string[];
  physicalChanges: string[];
  chemicalChanges: string[];
  description: string;
  color: string;
  animation: string;
}

const chemicals: Chemical[] = [
  {
    id: "sodium",
    name: "Sodium",
    color: "bg-gray-300",
    formula: "Na",
    description: "Highly reactive metal"
  },
  {
    id: "water",
    name: "Water",
    color: "bg-blue-200",
    formula: "H₂O",
    description: "Universal solvent"
  },
  {
    id: "vinegar",
    name: "Vinegar",
    color: "bg-yellow-200",
    formula: "CH₃COOH",
    description: "Acetic acid solution"
  },
  {
    id: "baking-soda",
    name: "Baking Soda",
    color: "bg-white",
    formula: "NaHCO₃",
    description: "Sodium bicarbonate"
  },
  {
    id: "copper-sulfate",
    name: "Copper Sulfate",
    color: "bg-blue-500",
    formula: "CuSO₄",
    description: "Blue crystalline salt"
  },
  {
    id: "iron",
    name: "Iron",
    color: "bg-gray-600",
    formula: "Fe",
    description: "Magnetic metal"
  }
];

const reactions: { [key: string]: Reaction } = {
  "sodium-water": {
    chemicals: ["sodium", "water"],
    physicalChanges: ["Vigorous bubbling", "Heat release", "Rapid movement", "Steam formation"],
    chemicalChanges: ["Sodium hydroxide formation", "Hydrogen gas production", "Energy released", "Irreversible reaction"],
    description: "Sodium reacts violently with water, producing hydrogen gas and sodium hydroxide. The reaction is highly exothermic!",
    color: "bg-orange-400",
    animation: "animate-bounce"
  },
  "vinegar-baking-soda": {
    chemicals: ["vinegar", "baking-soda"],
    physicalChanges: ["Fizzing and bubbling", "Foam formation", "Temperature decrease", "Volume expansion"],
    chemicalChanges: ["Carbon dioxide production", "Sodium acetate formation", "Acid-base neutralization", "Gas evolution"],
    description: "The acid-base reaction produces carbon dioxide gas, creating the characteristic fizzing effect!",
    color: "bg-green-400",
    animation: "animate-pulse"
  },
  "copper-sulfate-iron": {
    chemicals: ["copper-sulfate", "iron"],
    physicalChanges: ["Color change from blue to brown", "Solid deposition", "Surface coating", "Temperature increase"],
    chemicalChanges: ["Copper metal formation", "Iron sulfate production", "Electron transfer", "Displacement reaction"],
    description: "Iron displaces copper from copper sulfate, forming reddish-brown copper deposits on the iron surface!",
    color: "bg-orange-600",
    animation: "animate-fade-in"
  }
};

const ChemistryLab = () => {
  const [selectedChemicals, setSelectedChemicals] = useState<Chemical[]>([]);
  const [currentReaction, setCurrentReaction] = useState<Reaction | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [experimentComplete, setExperimentComplete] = useState(false);
  const beakerRef = useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.DragEvent, chemical: Chemical) => {
    e.dataTransfer.setData("chemical", JSON.stringify(chemical));
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const chemicalData = e.dataTransfer.getData("chemical");
    if (chemicalData) {
      const chemical = JSON.parse(chemicalData);
      if (selectedChemicals.length < 2 && !selectedChemicals.find(c => c.id === chemical.id)) {
        setSelectedChemicals(prev => [...prev, chemical]);
      }
    }
  }, [selectedChemicals]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const startReaction = () => {
    if (selectedChemicals.length === 2) {
      const reactionKey = selectedChemicals.map(c => c.id).sort().join("-");
      const reaction = reactions[reactionKey];
      
      if (reaction) {
        setCurrentReaction(reaction);
        setShowResults(true);
        setTimeout(() => setExperimentComplete(true), 2000);
      } else {
        setCurrentReaction({
          chemicals: selectedChemicals.map(c => c.id),
          physicalChanges: ["No visible reaction", "Mixing of substances"],
          chemicalChanges: ["No chemical reaction occurred"],
          description: "These chemicals don't react significantly under normal conditions.",
          color: "bg-gray-400",
          animation: ""
        });
        setShowResults(true);
        setTimeout(() => setExperimentComplete(true), 1000);
      }
    }
  };

  const resetExperiment = () => {
    setSelectedChemicals([]);
    setCurrentReaction(null);
    setShowResults(false);
    setQuizAnswers([]);
    setScore(0);
    setExperimentComplete(false);
  };

  const handleQuizAnswer = (change: string, isCorrect: boolean) => {
    if (!quizAnswers.includes(change)) {
      setQuizAnswers(prev => [...prev, change]);
      if (isCorrect) {
        setScore(prev => prev + 1);
      }
    }
  };

  const allChanges = currentReaction 
    ? [...currentReaction.physicalChanges, ...currentReaction.chemicalChanges]
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/student-dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <Beaker className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Chemistry Lab Simulation</h1>
            </div>
          </div>
          <Button onClick={resetExperiment} variant="outline">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>
      </header>

      <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chemical Shelf */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Chemical Shelf
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {chemicals.map((chemical) => (
                <div
                  key={chemical.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, chemical)}
                  className={`${chemical.color} border-2 border-gray-300 rounded-lg p-4 cursor-grab active:cursor-grabbing hover:shadow-lg transition-all`}
                >
                  <div className="text-center">
                    <div className="font-bold text-sm mb-1">{chemical.name}</div>
                    <div className="text-xs text-gray-600 mb-2">{chemical.formula}</div>
                    <div className="text-xs text-gray-500">{chemical.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Instructions:</strong> Drag and drop two chemicals into the beaker to start your experiment!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Experiment Area */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Reaction Beaker</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div
              ref={beakerRef}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className={`mx-auto w-32 h-40 border-4 border-gray-400 rounded-b-full bg-gray-100 flex flex-col items-center justify-center transition-all duration-500 ${
                currentReaction ? `${currentReaction.color} ${currentReaction.animation}` : ""
              }`}
            >
              {selectedChemicals.length === 0 && (
                <p className="text-sm text-gray-500">Drop chemicals here</p>
              )}
              {selectedChemicals.map((chemical, index) => (
                <Badge key={chemical.id} variant="secondary" className="mb-1">
                  {chemical.formula}
                </Badge>
              ))}
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-600">
                Selected: {selectedChemicals.map(c => c.name).join(" + ") || "None"}
              </p>
              
              {selectedChemicals.length === 2 && !showResults && (
                <Button onClick={startReaction} className="w-full">
                  Start Reaction
                </Button>
              )}
              
              {selectedChemicals.length < 2 && (
                <p className="text-xs text-gray-500">
                  Select {2 - selectedChemicals.length} more chemical(s)
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results Panel */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Observation Panel</CardTitle>
          </CardHeader>
          <CardContent>
            {!showResults ? (
              <div className="text-center text-gray-500 py-8">
                <Beaker className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Start an experiment to see results here!</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h4 className="font-bold text-blue-800 mb-2">What Happened:</h4>
                  <p className="text-sm text-blue-700">{currentReaction?.description}</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-green-700 mb-2">Physical Changes:</h5>
                    <ul className="text-sm space-y-1">
                      {currentReaction?.physicalChanges.map((change, index) => (
                        <li key={index} className="flex items-center text-green-600">
                          <CheckCircle className="w-3 h-3 mr-2" />
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-purple-700 mb-2">Chemical Changes:</h5>
                    <ul className="text-sm space-y-1">
                      {currentReaction?.chemicalChanges.map((change, index) => (
                        <li key={index} className="flex items-center text-purple-600">
                          <CheckCircle className="w-3 h-3 mr-2" />
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {experimentComplete && (
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-bold text-yellow-800 mb-3">Quiz: What changes occurred?</h4>
                    <p className="text-sm text-yellow-700 mb-3">Select all the changes you observed:</p>
                    
                    <div className="space-y-2 mb-4">
                      {allChanges.map((change, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuizAnswer(change, true)}
                          className={`w-full text-left p-2 rounded text-sm transition-all ${
                            quizAnswers.includes(change)
                              ? "bg-green-100 border border-green-300 text-green-800"
                              : "bg-white border border-gray-200 hover:bg-gray-50"
                          }`}
                        >
                          {quizAnswers.includes(change) ? (
                            <CheckCircle className="w-4 h-4 inline mr-2 text-green-600" />
                          ) : (
                            <div className="w-4 h-4 inline-block mr-2" />
                          )}
                          {change}
                        </button>
                      ))}
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      Score: {score}/{allChanges.length} correct observations
                    </div>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChemistryLab;