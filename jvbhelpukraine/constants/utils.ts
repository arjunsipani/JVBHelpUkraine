export const parseSpecial = (s: string) => {
  s = s.replace("Z", "+00:00");
  // Get the parts of the timestamp
  let [y, m, d, H, M, S] = s.match(/\d+|a-z+|[+-]\d{4}$/g) || [];

  let spl = s.substring(0, s.length - 6).split(":" + S);
  let rest = spl[spl.length - 1];
  let offset = s.substring(s.length - 6);
  let ms = "0";

  if (rest.charAt(0) == ".") ms = rest.slice(1, 4);

  // comment out this offset stuff bc its being dumb and causing invalid date
  // let offSign: string; let offMins = 0;
  // if (!!offset) {
  //   // Get the offset sign
  //   offSign = offset.substring(0, 1);
  //   // Convert offset to minutes
  //   offMins =
  //     (parseInt(offset.substring(1, 1 + 2)) * 60 +
  //       parseInt(offset.substring(3, 3 + 2))) *
  //     (offSign == "+" ? 1 : -1);
  // }

  // Create a Date, adjusted by the offset
  return new Date(
    Date.UTC(
      parseInt(y),
      parseInt(m) - 1,
      parseInt(d),
      parseInt(H),
      parseInt(M),
      parseInt(S),
      parseInt(ms)
    )
  );
};
