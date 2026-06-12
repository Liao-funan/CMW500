# Using the Generator List Mode

Module: GPRF Generator
Source: df92c7a126c446f9.htm

## 原始指令文档说明
GPRF Generator
 > 
Programming
 > 
Using the Generator List Mode
Using the Generator List Mode
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST; *OPC?
// *****************************************************************************
// Activate list mode, set frequencies and levels for 5 steps
// using two alternative command sets
// *****************************************************************************
SOURce:GPRF:GEN:LIST ON
SOURce:GPRF:GEN:LIST:SSTop 0, 4
SOURce:GPRF:GEN:LIST:STARt?
SOURce:GPRF:GEN:LIST:STOP?
SOURce:GPRF:GEN:LIST:IREP 0,1; IREP 1,1; IREP 2,5; IREP 3,5; IREP 4,1
SOURce:GPRF:GEN:LIST:COUNt?
SOURce:GPRF:GEN:LIST:FREQ 0,1.9224E+9; FREQ 1,1.9224E+9; 
    FREQ 2,1.9224E+9; FREQ 3,1.9224E+9; FREQ 4,1.9224E+9
SOURce:GPRF:GEN:LIST:RFLevel 0,-20; RFL 1,-23; RFL 2,-26; RFL 3,-29; RFL 4,-32
SOURce:GPRF:GEN:LIST:DGAin 0,-2; DGA 1,-2; DGA 2,-2; DGA 3,-2; DGA 4,-2
SOURce:GPRF:GEN:LIST:IREPetition:ALL?
SOURce:GPRF:GEN:LIST:FREQuency:ALL?
SOURce:GPRF:GEN:LIST:RFLevel:ALL?
SOURce:GPRF:GEN:LIST:DGAin:ALL?
SOURce:GPRF:GEN:LIST:FREQuency:ALL 1.9224E+9, 1.9224E+9, 1.9224E+9,
    1.9224E+9, 1.9224E+9
SOURce:GPRF:GEN:LIST:RFLevel:ALL -20, -23, -26, -29, -32
SOURce:GPRF:GEN:LIST:DGAin:ALL -2, -2, -2, -2, -2
// *****************************************************************************
// Start the list in the second and the following cycles at step no. 1
// *****************************************************************************
SOURce:GPRF:GEN:LIST:GOTO 1
// *****************************************************************************
// Set dwell time equal to the duration of a WCDMA slot,
// let the generator cycle through the list,
// changing the frequency/level after the dwell times.
// *****************************************************************************
SOURce:GPRF:GEN:LIST:DTIMe:ALL 666.67E-6, 666.67E-6, 666.67E-6, 666.67E-6,
    666.67E-6
SOURce:GPRF:GEN:LIST:INCRement:CATalog?
SOURce:GPRF:GEN:LIST:INCRement 'Dwell Time'
// *****************************************************************************
// For routing to connector bench:
// Configure the output connectors per list entry.
// Use the first four connectors for list entry 0 to 2.
// Use the last four connectors for list entry 3 and 4.
// *****************************************************************************
SOURce:GPRF:GEN:LIST:CMWS:CSET LIST
SOURce:GPRF:GEN:LIST:CMWS:USAGe:TX 0,ON,ON,ON,ON,OFF,OFF,OFF,OFF
SOURce:GPRF:GEN:LIST:CMWS:USAGe:TX 1,ON,ON,ON,ON,OFF,OFF,OFF,OFF
SOURce:GPRF:GEN:LIST:CMWS:USAGe:TX 2,ON,ON,ON,ON,OFF,OFF,OFF,OFF
SOURce:GPRF:GEN:LIST:CMWS:USAGe:TX 3,OFF,OFF,OFF,OFF,ON,ON,ON,ON
SOURce:GPRF:GEN:LIST:CMWS:USAGe:TX 4,OFF,OFF,OFF,OFF,ON,ON,ON,ON
// *****************************************************************************
// Switch on generator
// *****************************************************************************
SOURce:GPRF:GEN:STATe ON: *OPC?
Top