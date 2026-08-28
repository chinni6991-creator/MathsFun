import './Screen6.css'

import Numbers from './Topics/Numbers'
import Patterns from './Topics/Patterns'
import AdditionSubtraction from './Topics/AdditionSubtraction'
import MultiplicationDivision from './Topics/MultiplicationDivision'
import MentalArithmetic from './Topics/MentalArithmetic'
import FactorsMultiplesPrime from './Topics/FactorsMultiplesPrime'
import NumberPlay from './Topics/NumberPlay'
import ArithmeticExpressions from './Topics/ArithmeticExpressions'
import IntegersNumberLine from './Topics/IntegersNumberLine'
import Fractions from './Topics/Fractions'
import Decimals from './Topics/Decimals'
import Money from './Topics/Money'
import Measurement from './Topics/Measurement'
import Time from './Topics/Time'
import RatioProportion from './Topics/RatioProportion'
import Percentage from './Topics/Percentage'
import AlgebraLetterNumbers from './Topics/AlgebraLetterNumbers'
import FindingUnknown from './Topics/FindingUnknown'
import LinesAngles from './Topics/LinesAngles'
import ParallelIntersectingLines from './Topics/ParallelIntersectingLines'
import ShapesGeometry from './Topics/ShapesGeometry'
import Circles from './Topics/Circles'
import Symmetry from './Topics/Symmetry'
import ConstructionsTilings from './Topics/ConstructionsTilings'
import PerimeterArea from './Topics/PerimeterArea'
import GeometricFigures3D from './Topics/GeometricFigures3D'
import DataHandlingPresentation from './Topics/DataHandlingPresentation'
import ConnectingDots from './Topics/ConnectingDots'
import GeometricTwins from './Topics/GeometricTwins'
import MathsEverydayLife from './Topics/MathsEverydayLife'


function Screen6({ topic, onBack }) {

  // 1. Numbers
  if (topic === 'Numbers & Number System') {
    return <Numbers onBack={onBack} />
  }

  // 2. Patterns
  if (topic === 'Patterns in Mathematics') {
    return <Patterns onBack={onBack} />
  }

  // 3. Addition & Subtraction
  if (topic === 'Addition & Subtraction') {
    return <AdditionSubtraction onBack={onBack} />
  }

  // 4. Multiplication & Division
  if (topic === 'Multiplication & Division') {
    return <MultiplicationDivision onBack={onBack} />
  }

  // 5. Mental Arithmetic
  if (topic === 'Mental Arithmetic') {
    return <MentalArithmetic onBack={onBack} />
  }

  // 6. Factors, Multiples & Prime Numbers
  if (topic === 'Factors, Multiples & Prime Numbers') {
    return <FactorsMultiplesPrime onBack={onBack} />
  }

  // 7. Number Play
  if (topic === 'Number Play') {
    return <NumberPlay onBack={onBack} />
  }

  // 8. Arithmetic Expressions
  if (topic === 'Arithmetic Expressions') {
    return <ArithmeticExpressions onBack={onBack} />
  }

  // 9. Integers & Number Line
  if (topic === 'Integers & Number Line') {
    return <IntegersNumberLine onBack={onBack} />
  }

  // 10. Fractions
  if (topic === 'Fractions') {
    return <Fractions onBack={onBack} />
  }

  // 11. Decimals
  if (topic === 'Decimals') {
    return <Decimals onBack={onBack} />
  }

  // 12. Money
  if (topic === 'Money') {
    return <Money onBack={onBack} />
  }

  // 13. Measurement
  if (topic === 'Measurement') {
    return <Measurement onBack={onBack} />
  }

  // 14. Time
  if (topic === 'Time') {
    return <Time onBack={onBack} />
  }

  // 15. Ratio & Proportion
  if (topic === 'Ratio & Proportion') {
    return <RatioProportion onBack={onBack} />
  }

  // 16. Percentage
  if (topic === 'Percentage') {
    return <Percentage onBack={onBack} />
  }

  // 17. Algebra & Letter-Numbers
  if (topic === 'Algebra & Letter-Numbers') {
    return <AlgebraLetterNumbers onBack={onBack} />
  }

  // 18. Finding the Unknown
  if (topic === 'Finding the Unknown') {
    return <FindingUnknown onBack={onBack} />
  }

  // 19. Lines & Angles
  if (topic === 'Lines & Angles') {
    return <LinesAngles onBack={onBack} />
  }

  // 20. Parallel & Intersecting Lines
  if (topic === 'Parallel & Intersecting Lines') {
    return <ParallelIntersectingLines onBack={onBack} />
  }

  // 21. Shapes & Geometry
  if (topic === 'Shapes & Geometry') {
    return <ShapesGeometry onBack={onBack} />
  }

  // 22. Circles
  if (topic === 'Circles') {
    return <Circles onBack={onBack} />
  }

  // 23. Symmetry
  if (topic === 'Symmetry') {
    return <Symmetry onBack={onBack} />
  }

  // 24. Constructions & Tilings
  if (topic === 'Constructions & Tilings') {
    return <ConstructionsTilings onBack={onBack} />
  }

  // 25. Perimeter & Area
  if (topic === 'Perimeter & Area') {
    return <PerimeterArea onBack={onBack} />
  }

  // 26. 3D & Geometric Figures
  if (topic === '3D & Geometric Figures') {
    return <GeometricFigures3D onBack={onBack} />
  }

  // 27. Data Handling & Presentation
  if (topic === 'Data Handling & Presentation') {
    return <DataHandlingPresentation onBack={onBack} />
  }

  // 28. Connecting the Dots
  if (topic === 'Connecting the Dots') {
    return <ConnectingDots onBack={onBack} />
  }

  // 29. Geometric Twins
  if (topic === 'Geometric Twins') {
    return <GeometricTwins onBack={onBack} />
  }

  // 30. Maths in Everyday Life
  if (topic === 'Maths in Everyday Life') {
    return <MathsEverydayLife onBack={onBack} />
  }


  // Default screen
  return (
    <div className="screen6">

      <button
        className="screen6-back"
        onClick={onBack}
      >
        ← BACK TO LEARN
      </button>

      <div className="screen6-content">

        <div className="screen6-icon">
          🧮
        </div>

        <h1>{topic}</h1>

        <p className="screen6-subtitle">
          Let's explore mathematics together!
        </p>

        <div className="concept-box">

          <h2>✨ Coming Soon</h2>

          <p>
            Interactive explanations, beautiful diagrams,
            animations and fun examples for
            <strong> {topic}</strong> will appear here.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Screen6