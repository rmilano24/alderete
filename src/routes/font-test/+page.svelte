<svelte:head>
  <title>Font Test - Alderete</title>
</svelte:head>

<div class="container mx-auto p-8 max-w-4xl">
  <h1 class="text-4xl mb-8 text-center">Font Test Page</h1>
  
  <div class="space-y-8">
    <!-- Matter Font Tests -->
    <section class="border-b pb-6">
      <h2 class="text-2xl mb-4 font-matter">Matter Font Family</h2>
      
      <div class="space-y-2">
        <p class="font-matter font-normal text-lg">Matter Regular (400) - The quick brown fox jumps over the lazy dog</p>
        <p class="font-matter font-semibold text-lg">Matter SemiBold (600) - The quick brown fox jumps over the lazy dog</p>
      </div>
    </section>

    <!-- Reckless Font Tests -->
    <section class="border-b pb-6">
      <h2 class="text-2xl mb-4 font-reckless">Reckless Font Family</h2>
      
      <div class="space-y-2">
        <p class="font-reckless font-normal text-lg">Reckless Light (400) - The quick brown fox jumps over the lazy dog</p>
        <p class="font-reckless font-normal italic text-lg">Reckless Light Italic (400) - The quick brown fox jumps over the lazy dog</p>
        <p class="font-reckless font-light text-lg">Reckless Light (300) - The quick brown fox jumps over the lazy dog</p>
        <p class="font-reckless font-light italic text-lg">Reckless Light Italic (300) - The quick brown fox jumps over the lazy dog</p>
      </div>
    </section>

    <!-- Alternative Reckless Font Tests -->
    <section class="border-b pb-6">
      <h2 class="text-2xl mb-4 font-reckless-light">Reckless-Light Font Family</h2>
      
      <div class="space-y-2">
        <p class="font-reckless-light font-normal text-lg">Reckless-Light Normal (400) - The quick brown fox jumps over the lazy dog</p>
        <p class="font-reckless-light font-normal italic text-lg">Reckless-Light Italic (400) - The quick brown fox jumps over the lazy dog</p>
      </div>
    </section>

    <!-- Direct CSS Font Test -->
    <section class="border-b pb-6">
      <h2 class="text-2xl mb-4">Direct CSS Font Test</h2>
      <div class="space-y-2">
        <p style="font-family: 'Reckless', serif; font-size: 1.125rem;">Direct Reckless CSS - The quick brown fox jumps over the lazy dog</p>
        <p style="font-family: 'Reckless-Light', serif; font-size: 1.125rem;">Direct Reckless-Light CSS - The quick brown fox jumps over the lazy dog</p>
        <p style="font-family: 'Matter', sans-serif; font-size: 1.125rem;">Direct Matter CSS - The quick brown fox jumps over the lazy dog</p>
      </div>
    </section>
  </div>
</div> 