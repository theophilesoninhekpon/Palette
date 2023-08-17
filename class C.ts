class C {

    // Ensemble de couleurs choisies par l'utilisateur
  choosedColor!: {id: string, primary: string, secondary: string, tertiary: string} | undefined;

  // Ensemble des couleurs de la palette
  colors = [
    {
      id: '1',
      primary: '#38383b',
      secondary: 'f2f2f3',
      tertiary: '878787'
    },
    {
      id: '2',
      primary: '0f5132',
      secondary: 'f0f5f3',
      tertiary: '8c747f'
    },
    {
      id: '3',
      primary: '6cb14f',
      secondary: 'f1f5f',
      tertiary: '114b5f'
    },
    {
      id: '4',
      primary: '20c997',
      secondary: 'f0f5f4',
      tertiary: '426a5a'
    },
    {
      id: '5',
      primary: '79dfc1',
      secondary: 'f0f5f4',
      tertiary: 'c16b85'
    },
    {
      id: '6',
      primary: '3dd5f3',
      secondary: 'f0f4f5',
      tertiary: 'd84f34'
    },
    {
      id: '7',
      primary: '6ea8fe',
      secondary: 'f0f2f5',
      tertiary: '474973'
    },
    {
      id: '8',
      primary: '0aa2c0',
      secondary: 'f0f4f5',
      tertiary: 'cc9489'
    },
    {
      id: '9',
      primary: '0a58ca',
      secondary: 'f0f2f5',
      tertiary: 'd2b58a'
    },
    {
      id: '10',
      primary: '6610f2',
      secondary: 'f2f0f5',
      tertiary: 'c97064'
    },
    {
      id: '11',
      primary: '6f42c1',
      secondary: 'f2f0f5',
      tertiary: '114b5f'
    },
    {
      id: '12',
      primary: 'a370f7',
      secondary: 'f2f0f5',
      tertiary: '504746'
    },
    {
      id: '13',
      primary: 'e36ff7',
      secondary: 'f4f0f5',
      tertiary: '233d4d'
    },
    {
      id: '14',
      primary: 'e56b6b',
      secondary: 'f5f0f0',
      tertiary: '4c5b5c'
    },
    {
      id: '15',
      primary: '8b1e3f',
      secondary: 'f5f0f2',
      tertiary: '23395b'
    },
    {
      id: '16',
      primary: 'de6528',
      secondary: 'f5f2f0',
      tertiary: 'a2cde3'
    },
    {
      id: '17',
      primary: 'e17726',
      secondary: 'f5f2f0',
      tertiary: '51344d'
    },
    {
      id: '18',
      primary: 'dfa400',
      secondary: 'f5f4f0',
      tertiary: '2b4aa0'
    },
    {
      id: '19',
      primary: 'fab803', 
      secondary: 'f5f4f0',
      tertiary: '1a1423'
    },
    {
      id: '20',
      primary: 'b99253',
      secondary: 'f5f3f0',
      tertiary: '495867'
    }
  ];

  /**
   * 
   * Fonction de récupération des couleurs en fonction de l'id 
   */

  getColors(id: number): void {
    this.choosedColor = this.colors.find((color) => color.id === id.toString())
    console.log(this.choosedColor)
  }
  
}