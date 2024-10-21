function handlePropCases({ cases, currValue, values }: { cases: string[]; currValue: any; values: Record<any, any> }) {
  // Loop through each case in the switch statement
  for (const caseValue of cases) {
    if (currValue === caseValue) {
      return values[caseValue];
    }
  }
}

export { handlePropCases };
