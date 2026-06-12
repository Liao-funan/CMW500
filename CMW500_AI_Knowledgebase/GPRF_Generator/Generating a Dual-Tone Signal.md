# Generating a Dual-Tone Signal

Module: GPRF Generator
Source: 5ecc86d54c99439b.htm

## 原始指令文档说明
GPRF Generator
 > 
Programming
 > 
Generating a Dual-Tone Signal
Generating a Dual-Tone Signal
// *****************************************************************************
// System-Reset
// *****************************************************************************
*RST;*OPC?
// *****************************************************************************
// Activate dual-tone mode, set frequencies and levels
// *****************************************************************************
SOURce:GPRF:GEN:BBMode DTON
SOURce:GPRF:GEN:RFSettings:FREQuency 1.000000E+009
SOURce:GPRF:GEN:RFSettings:DGAin -1.12
SOURce:GPRF:GEN:DTONe:OFRequency1 1000
SOURce:GPRF:GEN:DTONe:OFRequency2 2000
SOURce:GPRF:GEN:DTONe:Ratio 10
// *****************************************************************************
// Query levels of source 1 and source 2
// *****************************************************************************
SOURce:GPRF:GEN:DTONe:LEVel1?
SOURce:GPRF:GEN:DTONe:LEVel2?
// *****************************************************************************
// Switch on generator
// *****************************************************************************
SOURce:GPRF:GEN:STATe ON; *OPC?
Top